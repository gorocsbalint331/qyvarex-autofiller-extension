// @ts-nocheck
/**
 * Find a company match by LinkedIn company id, then by company name.
 */

export function findCompanyMatch(companies, companyName, linkedinCompanyId) {
  if (linkedinCompanyId) {
    const byLinkedinId = companies.find(
      (company) =>
        company?.linkedin_company_id != null &&
        String(company.linkedin_company_id) === String(linkedinCompanyId),
    )
    if (byLinkedinId) return byLinkedinId
  }
  if (companyName) {
    return companies.find(
      (company) =>
        company?.companyName?.toLowerCase() === companyName.toLowerCase(),
    )
  }
}
