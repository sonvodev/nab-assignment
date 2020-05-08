
import { IsNotEmpty, IsEmail, validateSync, ValidateIf } from "class-validator";

export interface IShareholderListingModel {
  firstname: string
  lastname: string
  email: string
  isOwner: boolean
  percentage: number
  validate(): boolean
  errors: { [key: string]: boolean }
}

export class ShareholderListingModel implements IShareholderListingModel {
  @ValidateIf(x => {
    return x.firstname === undefined && x.lastname === undefined
      || x.firstname === "" && x.lastname === undefined
      || x.firstname === undefined && x.lastname === ""
      || x.firstname === "" && x.lastname === ""
  })
  @IsNotEmpty()
  firstname: string

  @ValidateIf(x => {
    return x.firstname === undefined && x.lastname === undefined
      || x.firstname === "" && x.lastname === undefined
      || x.firstname === undefined && x.lastname === ""
      || x.firstname === "" && x.lastname === ""
  })
  @IsNotEmpty()
  lastname: string

  @IsEmail()
  email: string
  isOwner: boolean
  errors: { [key: string]: boolean }

  percentage: number

  /**
   *
   */
  constructor(partial: Partial<IShareholderListingModel> = {
    firstname: "",
    lastname: "",
    email: "",
    isOwner: false,
    percentage: 0
  }) {
    this.firstname = partial.firstname!;
    this.lastname = partial.lastname!;
    this.email = partial.email!;
    this.isOwner = partial.isOwner!;
    this.percentage = partial.percentage!;
    this.errors = { firstname: false, lastname: false, email: false }
  }

  validate(): boolean {
    const errors = validateSync(this);
    const keys = ["firstname", "lastname", "email"];
    for (let i = 0; i < keys.length; i++) {
      this.errors[keys[i]] = errors.filter(x => x.property === keys[i]).length > 0;
    }
    return errors.length === 0
  }
}