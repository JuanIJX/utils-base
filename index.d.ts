declare module '@ijx/utils' {	
	export function isInteger(num: any): boolean;
	export function isFloat(num: any): boolean;
	export function isClass(entity: any): boolean;
	export function isNullable(data: any): boolean;
	export function isType(data: any, type: string): boolean;
	export function isTypeNotNull(data: any, type: string): boolean;
	export function isTypeStringNotEmpty(data: any): boolean;
	export function wait(time: number): Promise<void>;
	export function thread(func: Function): Promise<void>;
	export function echo(cad: string): void;
	export function getTimestamp(): number;
	export function getDate(...t: any): Date;
	export function makeid(length: number): string;
	/**
	 * Convierte un int en string hexadecimal
	 * 
	 * @param num: int comprendido en [0, 255]
	 * @return: string con el dato en hexadecimal, ej: 0d
	 */
	export function decToHex(num: number): string;
	export function base64_encode(data: string): string;
	export function base64_decode(data: string): string;
	/**
	 * Ajuste decimal de un número.
	 * 
	 * @param {Number}  value El numero.
	 * @param {Integer} exp   El exponente (el logaritmo 10 del ajuste base).
	 * @param {String}  type  El tipo de ajuste (round, floor, ceil).
	 * @returns {Number} El valor ajustado.
	 */
	export function decimalAdjust(value: number, exp: number, type: string): number;
	export function secondsToDhms(seconds: number): object;
	export function stringifyNoCircular(obj: object, space: string|null): string;

	/**
	 * Lectura de parámetros de arranque al ejecutar un script.
	 * Ejemplo:
	 * Arranque: ./script.js a b --debug c --ip d e --port 32.4
	 * validArgs = { debug: 0, ip: 1, port: 2 }
	 * salida = { debug: true, ip: 'd', port: 32 }
	 * 
	 * @param {object} validArgs Objeto con los datos, los keys serán el nombre
	 * para buscar y el valor será el tipo. 0 = boolean, 1 = string, 2 = integer, 3 = float
	 * @param {string} initChar Caracter inicial de los parámetros, default -
	 * @returns Objeto con los datos leídos
	 */
	export function readArgs(validArgs: object, initChar: string, defaultBool: boolean): object;
	export function replaceSqlValues(sqlQuery: string, data: (string | number | null)[]): string;
}