import { ShareholderListingModel } from "./shareholder-listing.model"

//@ts-ignore
describe('Test function', () => {
  it('Test Validate', () => {

    const shareholder = new ShareholderListingModel({
      firstname: "",
      lastname: "",
      email: ""
    })

    expect(shareholder.validate()).toBe(false)
  })
})