// @ts-nocheck
/**
 * Plugin feedback form modal (+ optional entry button).
 */

import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Radio,
  message,
} from "antd"
import clsx from "clsx"
import { sendToBackground } from "@plasmohq/messaging"
import * as feedbackSvg from "../../assets/inline/images/feedback.svg.js"
import * as logoSvg from "../../assets/inline/images/logo.svg.js"
import { HELPER_MODAL_Z_INDEX } from "../../constants.ts"
import { HOST_ID } from "../../helper-shims/host.ts"
import { useFeedbackStore } from "../../store/feedback.ts"
import Image from "../../ui/Image.ts"
import BasicButton from "../BasicButton.ts"
import CustomRate from "../CustomRate.ts"

function assetUrl(mod) {
  return mod?.default ?? mod
}

const CLASS_PREFIX = "feedback-popup"

const FEEDBACK_REASON_OPTIONS = [
  { label: "Fields were not filled correctly", value: 1 },
  { label: "Some fields were not detected", value: 2 },
  { label: "The process took too long", value: 3 },
  { label: "Not enough sites were supported", value: 4 },
  { label: "The pop-up appeared when it shouldn't have", value: 6 },
  { label: "Edit with AI was not helpful", value: 7 },
]
  .sort(() => Math.random() - 0.5)
  .concat({ label: "Other", value: 5 })

export default function FeedbackPopup({
  jobId,
  configs = { type: "checkbox", options: FEEDBACK_REASON_OPTIONS },
  variant = "full",
}) {
  const openFeedbackPopup = useFeedbackStore(
    (state) => state.openFeedbackPopup,
  )
  const setOpenFeedbackPopup = useFeedbackStore(
    (state) => state.setOpenFeedbackPopup,
  )
  const [form] = Form.useForm()
  const [messageApi, messageContext] = message.useMessage({
    getContainer: () => document.getElementById(HOST_ID)?.shadowRoot,
  })

  const closeAndReset = () => {
    setOpenFeedbackPopup(false)
    form.resetFields()
  }

  const handleFinish = (values) =>
    sendToBackground({
      name: "postPluginFeedback",
      body: {
        jobId,
        pageUrl: window.location.href,
        ...values,
      },
    }).then(() => {
      messageApi.info({
        duration: 5,
        icon: jsx(Fragment, {}),
        content: "Feedback received, thank you!",
      })
      setOpenFeedbackPopup(false)
    })

  const OptionControl = configs?.type === "radio" ? Radio : Checkbox
  const showEntryButton = variant !== "modal-only"
  const showModal = variant !== "button-only"

  return jsxs(Fragment, {
    children: [
      showModal && messageContext,
      showEntryButton &&
        jsxs(Button, {
          id: "feedback-entry",
          onClick: () => setOpenFeedbackPopup(true),
          children: [
            jsx(Image, {
              src: assetUrl(feedbackSvg),
              alt: "logo-image",
              preview: false,
            }),
            "Feedback",
          ],
        }),
      showModal &&
        jsx(Modal, {
          open: openFeedbackPopup,
          title: null,
          footer: null,
          zIndex: HELPER_MODAL_Z_INDEX,
          className: CLASS_PREFIX,
          rootClassName: CLASS_PREFIX + "-root",
          closeIcon: false,
          getContainer: () => document.getElementById(HOST_ID)?.shadowRoot,
          destroyOnClose: true,
          onCancel: closeAndReset,
          keyboard: true,
          width: 480,
          children: jsxs(Flex, {
            vertical: true,
            gap: 16,
            children: [
              jsx(Image, {
                src: assetUrl(logoSvg),
                height: 24,
                width: 96,
                alt: "logo-image",
                draggable: false,
                preview: false,
                style: {
                  userSelect: "none",
                  pointerEvents: "none",
                },
              }),
              jsxs(Form, {
                form,
                name: "feedback-form",
                layout: "vertical",
                onFinish: handleFinish,
                children: [
                  jsx(Form.Item, {
                    name: "score",
                    label:
                      "How would you rate your overall experience with our Autofill Plugin?",
                    rules: [
                      {
                        required: true,
                        message: "Please select at least one option to proceed",
                      },
                    ],
                    children: jsxs(Flex, {
                      vertical: true,
                      gap: 8,
                      children: [
                        jsx(CustomRate, {
                          buttonClassName: "feedback-button",
                          scores: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                          onSelect: (score) => {
                            form.setFieldValue("score", score)
                          },
                        }),
                        jsxs(Flex, {
                          className: "feedback-scale",
                          children: [
                            jsx("span", { children: "Not Satisfied" }),
                            jsx("span", { children: "Very Satisfied" }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  jsx(Divider, { className: CLASS_PREFIX + "-divider" }),
                  jsx(Form.Item, {
                    shouldUpdate: true,
                    children: () =>
                      jsx(Form.Item, {
                        name: "reasons",
                        label:
                          "What aspects of the autofill experience did not meet your expectations?",
                        rules: [
                          {
                            required: true,
                            message:
                              "Please select at least one option to proceed",
                          },
                        ],
                        children: jsx(OptionControl.Group, {
                          className: CLASS_PREFIX + "-radio-group",
                          children: configs?.options?.map((option) =>
                            jsx(
                              OptionControl,
                              {
                                value: option.value,
                                className: CLASS_PREFIX + "-radio-item",
                                children: option.label,
                              },
                              option.value,
                            ),
                          ),
                        }),
                      }),
                  }),
                  jsx(Divider, { className: CLASS_PREFIX + "-divider" }),
                  jsx(Form.Item, {
                    name: "description",
                    label:
                      "Any specific feedback on how we can improve for you?",
                    rules: [
                      {
                        required: true,
                        message:
                          "Please describe your experience or share your ideas.",
                      },
                    ],
                    children: jsx(Input.TextArea, {
                      placeholder:
                        "The more specific you are, the better we can address your feedback.",
                      className: clsx(
                        CLASS_PREFIX + "-textarea",
                        CLASS_PREFIX + "-input",
                        CLASS_PREFIX + "-radio-item-extra",
                      ),
                    }),
                  }),
                  jsx(Form.Item, {
                    className: CLASS_PREFIX + "-form-action-button-group",
                    children: jsxs(Flex, {
                      gap: 12,
                      justify: "center",
                      children: [
                        jsx(BasicButton, {
                          className: clsx(
                            CLASS_PREFIX + "-button",
                            CLASS_PREFIX + "-button-cancel",
                          ),
                          onClick: closeAndReset,
                          children: "Cancel",
                        }),
                        jsx(BasicButton, {
                          className: clsx(
                            CLASS_PREFIX + "-button",
                            CLASS_PREFIX + "-button-submit",
                          ),
                          onClick: () => form.submit(),
                          children: "Submit",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  })
}
