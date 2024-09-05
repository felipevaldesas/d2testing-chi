interface PropertyType {
    id: number;
    name: string;
}

interface FinanceOperation {
    id: number;
    name: string;
}

export const PROPERTY_TYPES: PropertyType[] = [
    {id: 1, name: 'Oficina'},
    {id: 2, name: 'Local Comercial'},
    {id: 3, name: 'Bodega'},
    {id: 4, name: 'Terreno'}    
];

export const FINANCE_OPERATIONS: FinanceOperation [] = [
	{ id: 1, name: 'Arriendo' },
	{ id: 2, name: 'Venta' }
];