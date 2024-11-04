declare module '@ijx/utils' {
	export function NOOP(): void;
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
	export function getDate(...t: any): Date;
	export function basename(path: string, sep: string): string;
	export function dirname(path: string, sep: string): string;
	export function makeid(length?: number): string;
	/**
	 * Convierte un int en string hexadecimal
	 * 
	 * @param num: int comprendido en [0, 255]
	 * @return: string con el dato en hexadecimal, ej: 0d
	 */
	export function decToHex(num: number): string;
	/**
	 * Convierte un dato a base64
	 * 
	 * @param data Dato para convertir
	 * @returns {string} Cadena de base64
	 */
	export function base64_encode(data: string | Array<Number> | Object | Buffer): string;
	/**
	 * Convierte una cadena de base64 a Buffer. Este se puede
	 * convertir a string con .toString('ascii')
	 * 
	 * @param {string} data Dato para convertir
	 * @returns {Buffer} Buffer de salida
	 */
	export function base64_decode(data: string): Buffer;
	/**
	 * Ajuste decimal de un número.
	 * 
	 * @param {Number}  value El numero.
	 * @param {Integer} exp   El exponente (el logaritmo 10 del ajuste base).
	 * @param {String}  type  El tipo de ajuste (round, floor, ceil).
	 * @returns {Number} El valor ajustado.
	 */
	export function decimalAdjust(value: number, exp?: number, type?: string): number;
	export function secondsToDhms(seconds: number): Object;
	export function stringifyNoCircular(obj: Object, space?: string|null): string;
	export function replaceSqlValues(sqlQuery: string, data: (string | number | null)[]): string;
	export function isJson(text: string): boolean;
	export function escapeHtml(str: string): string;
	export function unescapeHtml(str: string): string;
	/**
	 * Convierte un número usando los prefijos del sistema internacional
	 * Ejemplo: 1024 = 1 K
	 * 
	 * @param value: Valor que se va a transformar
	 * @param divisor: Cantidad por la que se va a dividir el valor original
	 * @param redondeo: Redondeo que se utilizará al dividir
	 * @param mults: Lista de símbolos que retornará en cada caso
	 * @return Número con su símbolo
	 */
	export function metricPrefix(value: number, divisor: number, redondeo: number, mults: string[]|undefined): string;
	/**
	 * Lectura de parámetros de arranque al ejecutar un script.
	 * Ejemplo:
	 * Arranque: ./script.js a b --debug c --ip d e --port 32.4
	 * validArgs = { debug: 0, ip: 1, port: 2 }
	 * salida = { debug: true, ip: 'd', port: 32 }
	 * 
	 * @param {Object} validArgs Objeto con los datos, los keys serán el nombre
	 * para buscar y el valor será el tipo. 0 = boolean, 1 = string, 2 = integer, 3 = float
	 * @param {string} initChar Caracter inicial de los parámetros, default -
	 * @param {boolean} defaultBool Si es true establece un valor default a false en los boolean, default false
	 * @returns Objeto con los datos leídos
	 */
	export function readArgs(validArgs: Object, initChar?: string, defaultBool?: boolean): Object;
}