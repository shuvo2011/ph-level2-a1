function formatString(input: string, toUpper?: boolean): string {
	if (toUpper === false) {
		return `${input.toLowerCase()}`;
	}
	return `${input.toUpperCase()}`;
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
	return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
	return arrays.reduce((acc, item) => acc.concat(item), []);
}

class Vehicle {
	private make: string;
	private year: number;

	getInfo() {
		return `Make: ${this.make}, Year: ${this.year}`;
	}
}

class Car extends Vehicle {
	private model: string;

	getModel(modelInfo: string) {
		return (this.model = modelInfo);
	}
}

function processValue(value: string | number): number {
	if (typeof value === "string") {
		return value.length;
	} else {
		return value * 2;
	}
}

interface Product {
	name: string;
	price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
	if (products.length === 0) return null;

	return products.reduce((max, product) => (product.price > max.price ? product : max));
}

enum Day {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

function getDayType(day: Day): string {
	if (day === Day.Saturday || day === Day.Sunday) {
		return "Weekend";
	}
	return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (n < 0) {
				reject(new Error("Number is negative"));
			} else {
				resolve(n * n);
			}
		}, 1000);
	});
}
