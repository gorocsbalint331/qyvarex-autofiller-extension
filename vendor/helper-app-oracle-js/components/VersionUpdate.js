/**
 * Parcel module id: 8WhUc
 * Resolved path: components/VersionUpdate.js (oracle restore)
 * Dependencies:
 *   @parcel/transformer-js/src/esmodule-helpers.js -> cHUbl  =>  @parcel/transformer-js/src/esmodule-helpers.js
 *   react/jsx-runtime -> 8iOxN  =>  react/jsx-runtime.js
 *   ~components/VersionUpdate/UpdateReadyModal -> daBan  =>  _tilde_components/VersionUpdate/UpdateReadyModal.js
 *   ~components/VersionUpdate/UpdateUnavailableModal -> 1s9oG  =>  _tilde_components/VersionUpdate/UpdateUnavailableModal.js
 *   ~components/VersionUpdate/VersionBottomBar -> kh4HF  =>  _tilde_components/VersionUpdate/VersionBottomBar.js
 *   ~components/VersionUpdate/WhatsNewSheet -> COLfJ  =>  _tilde_components/VersionUpdate/WhatsNewSheet.js
 *   ~hooks/useVersionUpdate -> 9mB6w  =>  _tilde_hooks/useVersionUpdate.js
 */

var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
n.defineInteropFlag(r);
var o = e("react/jsx-runtime"),
  i = e("~components/VersionUpdate/UpdateReadyModal"),
  a = n.interopDefault(i),
  l = e("~components/VersionUpdate/UpdateUnavailableModal"),
  s = n.interopDefault(l),
  u = e("~components/VersionUpdate/VersionBottomBar"),
  c = n.interopDefault(u),
  d = e("~components/VersionUpdate/WhatsNewSheet"),
  f = n.interopDefault(d),
  p = e("~hooks/useVersionUpdate");
let m = ({
  currentJobId: e = null
}) => {
  let t = (0, p.useVersionUpdate)();
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(c.default, {
      banner: t.banner,
      localVersion: t.localVersion,
      onClickUpdate: t.onClickUpdate,
      onClickLater: t.onClickLaterNewVersion,
      onOpenWhatsNew: t.onOpenWhatsNew
    }), (0, o.jsx)(a.default, {
      open: t.readyModalOpen,
      targetVersion: t.refreshTargetVersion,
      submitting: t.refreshSubmitting,
      onRefresh: t.onClickRefresh,
      onLater: t.onClickLaterReady
    }), (0, o.jsx)(s.default, {
      open: t.unavailableModalOpen,
      onTryAgainLater: t.onClickTryAgainLater
    }), (0, o.jsx)(f.default, {
      releaseConfig: t.releaseConfig,
      currentJobId: e
    })]
  })
};
r.default = m

