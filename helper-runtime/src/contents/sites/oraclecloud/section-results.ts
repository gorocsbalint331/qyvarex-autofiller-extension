// @ts-nocheck
/**
 * Oracle Cloud — section result merge/miss helpers.
 */

function o(e) {
  return {
    index: e.index,
    ...(e.title
      ? {
          title: e.title,
        }
      : {}),
    ...(e.subtitle
      ? {
          subtitle: e.subtitle,
        }
      : {}),
    status: e.status,
    fields: e.fields.map((e2) => ({
      label: e2.label,
      ...(e2.value
        ? {
            value: e2.value,
          }
        : {}),
      status: e2.status,
    })),
  };
}
function mergeOracleSectionResult(e, t, r) {
  let n = t.rows.map((e2) => ({
      ...o(e2),
      index: e2.index + r,
    })),
    i2 = new Set(n.map((e2) => e2.index)),
    a2 = (e?.rows ?? []).filter((e2) => !i2.has(e2.index)).map(o);
  return {
    type: t.type,
    label: t.label,
    rows: [...a2, ...n].sort((e2, t2) => e2.index - t2.index),
  };
}
function markOracleSectionResultRowMissed(e, t) {
  return {
    type: e.type,
    label: e.label,
    rows: e.rows.map((e2) =>
      e2.index !== t
        ? o(e2)
        : {
            ...o(e2),
            status: "missed",
            fields: e2.fields.map((e3) => ({
              label: e3.label,
              ...(e3.value
                ? {
                    value: e3.value,
                  }
                : {}),
              status: "skipped" === e3.status ? "skipped" : "missed",
            })),
          },
    ),
  };
}

export { markOracleSectionResultRowMissed, mergeOracleSectionResult };
