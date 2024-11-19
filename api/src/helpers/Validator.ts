import Joi from "joi";

interface IGenericObject {
	[key: string]: any
};

interface IValidator<S, O>{
	validate(schema: S, payload: IGenericObject, options: O): Promise<void>
}

export class Validator implements IValidator<Joi.ObjectSchema, Joi.AsyncValidationOptions> {
	private static instance: Validator = null;
	public static create() {
		if(!this.instance) this.instance = new Validator();
		
		return this.instance;
	}

	async validate(schema: Joi.ObjectSchema, payload: IGenericObject, options?: Joi.AsyncValidationOptions): Promise<void>{
		try {
			await schema.validateAsync(payload, options);
		} catch(e: any) {
			console.log(e);
			throw { code: 422, error: e };
		}
	}
} 