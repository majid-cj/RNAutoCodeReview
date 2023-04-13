export type User = {
  UserEmail: string
  UserPassword: string
}

export class UserModel implements User {
  private _UserEmail: string = ''
  private _UserPassword: string = ''

  public set UserEmail(name: string) {
    this._UserEmail = name
  }

  public get UserEmail(): string {
    return this._UserEmail
  }

  public set UserPassword(name: string) {
    this._UserPassword = name
  }

  public get UserPassword(): string {
    return this._UserPassword
  }

  public ValidateLogin(): void {
    if (this.UserEmail.length < 10) {
      throw new Error('invalid user email')
    }

    if (this.UserPassword.length < 6) {
      throw new Error('invalid user password')
    }
  }
}
