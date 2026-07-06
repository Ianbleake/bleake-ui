/**
 * Convierte pesos (unidad de entrada del usuario) a centavos (unidad de almacenamiento del API).
 * Ejemplo: pesosToCentavos(1) === 100
 *
 * Inlined from campaign-dash `./utils` during migration
 * to keep this pattern free of domain utils.
 */
export function pesosToCentavos(pesos: number): number {
	return Math.round(pesos * 100);
}
