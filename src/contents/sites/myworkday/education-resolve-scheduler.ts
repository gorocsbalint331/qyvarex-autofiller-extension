// @ts-nocheck
/**
 * MyWorkday — defer education resolve while filling independent fields.
 */

function cloneWorkdayEducationRecords(records) {
  return records.map((record) =>
    record
      ? {
          ...record,
          ...(Array.isArray(record.operation)
            ? {
                operation: [...record.operation],
              }
            : {}),
        }
      : record,
  )
}

async function runDeferredWorkdayEducationResolve({
  fallbackValue,
  startResolve,
  fillIndependentFields,
  checkpoint,
  fillEducation,
  onResolveSettled,
}) {
  let resolvePromise
  const startedAt = Date.now()

  try {
    resolvePromise = Promise.resolve(startResolve()).then(
      (value) => ({
        value,
        failed: false,
        errorName: null,
      }),
      (error) => ({
        value: fallbackValue,
        failed: true,
        errorName: error instanceof Error ? error.name : typeof error,
      }),
    )
  } catch (error) {
    resolvePromise = Promise.resolve({
      value: fallbackValue,
      failed: true,
      errorName: error instanceof Error ? error.name : typeof error,
    })
  }

  await fillIndependentFields()
  const settled = await resolvePromise
  checkpoint()
  onResolveSettled?.({
    failed: settled.failed,
    elapsedMs: Date.now() - startedAt,
    errorName: settled.errorName,
  })
  await fillEducation(settled.value)
}

export {
  cloneWorkdayEducationRecords,
  runDeferredWorkdayEducationResolve,
}
