export interface ImageData {
	url: string;
	alt: string;
}

export interface PriceValues {
	value: number;
	formattedValue: string;
}

export interface Prices {
	salesPrice: PriceValues;
	recommendedRetailPrice: PriceValues;
	savings: PriceValues;
	savingsPercentageFormatted: string;
}

export interface Product {
	code: string;
	name: string;
	imageData: ImageData;
	supplier: string;
	dosageForm: string;
	packagingSize: string;
	basePrice: string;
	available: boolean;
	stock: number;
	prices: Prices
}
// data taken from json. Will remove when data fetch is implemented.
const data = {
	"code": "14024547",
	"name": "Paracetamol",
	"supplier": "Kyberg Pharma Vertriebs GmbH",
	"dosageForm": "Tabletten",
	"rating": 0,
	"reviewCount": 0,
	"packagingSize": "2 x 14 St",
	"defaultSaleCondition": "OR",
	"baseprice": "0,07 €/St.",
	"url": "/dextro-energy-dextrose-sport-tablets/14024547",
	"available": true,
	"stock": -1,
	"categories": [
		{
			"id": "EN001",
			"name": "Ernährung & Lifestyle"
		},
		{
			"id": "EN001F004",
			"name": "Für Sportler"
		},
		{
			"id": "EN001F004S001",
			"name": "Schnelle Energie"
		}
	],
	"saleConditions": {
		"OR": [
			{
				"code": "14024547",
				"packagingSize": "2 x 14 St."
			}
		]
	},
	"prices": {
		"salesPrice": {
			"value": 2.04,
			"formattedValue": "2,04 €"
		},
		"recommendedRetailPrice": {
			"value": 2.4,
			"formattedValue": "2,40 €"
		},
		"savings": {
			"value": 0.36,
			"formattedValue": "0,36 €"
		},
		"savingsPercentageFormatted": "15%"
	},
	"images": [
		{
			"id": 1036930,
			"versionNumber": 2,
			"meta": {
				"tags": [
					"/packshot",
					"/perspective/default",
					"/source/hersteller"
				]
			},
			"variants": {
				"90": {
					"formats": {
						"avif": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-90-1662679355.avif"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-90-1662679355@2x.avif"
								}
							}
						},
						"jpg": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-90-1662679355.jpg"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-90-1662679355@2x.jpg"
								}
							}
						},
						"webp": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-90-1662679355.webp"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-90-1662679355@2x.webp"
								}
							}
						}
					},
					"width": 90,
					"height": 90
				},
				"100": {
					"formats": {
						"avif": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-100-1662679355.avif"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-100-1662679355@2x.avif"
								}
							}
						},
						"jpg": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-100-1662679355.jpg"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-100-1662679355@2x.jpg"
								}
							}
						},
						"webp": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-100-1662679355.webp"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-100-1662679355@2x.webp"
								}
							}
						}
					},
					"width": 100,
					"height": 100
				},
				"140": {
					"formats": {
						"avif": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-140-1662679355.avif"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-140-1662679355@2x.avif"
								}
							}
						},
						"jpg": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-140-1662679355.jpg"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-140-1662679355@2x.jpg"
								}
							}
						},
						"webp": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-140-1662679355.webp"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-140-1662679355@2x.webp"
								}
							}
						}
					},
					"width": 140,
					"height": 140
				},
				"300": {
					"formats": {
						"avif": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-300-1662679355.avif"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-300-1662679355@2x.avif"
								}
							}
						},
						"jpg": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-300-1662679355.jpg"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-300-1662679355@2x.jpg"
								}
							}
						},
						"webp": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-300-1662679355.webp"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-300-1662679355@2x.webp"
								}
							}
						}
					},
					"width": 300,
					"height": 300
				},
				"420": {
					"formats": {
						"avif": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-420-1662679355.avif"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-420-1662679355@2x.avif"
								}
							}
						},
						"jpg": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-420-1662679355.jpg"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-420-1662679355@2x.jpg"
								}
							}
						},
						"webp": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-420-1662679355.webp"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-420-1662679355@2x.webp"
								}
							}
						}
					},
					"width": 420,
					"height": 420
				},
				"1000": {
					"formats": {
						"avif": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-1000-1662679355.avif"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-1000-1662679355@2x.avif"
								}
							}
						},
						"jpg": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-1000-1662679355.jpg"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-1000-1662679355@2x.jpg"
								}
							}
						},
						"webp": {
							"resolutions": {
								"1x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-1000-1662679355.webp"
								},
								"2x": {
									"url": "https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-1000-1662679355@2x.webp"
								}
							}
						}
					},
					"width": 1000,
					"height": 1000
				}
			}
		}
	]
}

// Mock data to be used for rendering components. Will be removed when data fetch is implemented.
export const ProductMock: Product = {
	code:data.code,
	name: data.name,
	imageData: {
		url: 'https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-300-1662679355.jpg',
		alt: 'testing 123'
	},
	prices: data.prices,
	available: data.available,
	basePrice: data.baseprice,
	dosageForm: data.dosageForm,
	packagingSize: data.packagingSize,
	stock: data.stock,
	supplier: data.supplier,
}