import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Valheim Info API',
    description: 'Valheim Items API',
    version: '1.0.0'
  },
  host: 'valheim-v1-data.onrender.com',
  schemes: ['https'],
  tags: [
    { name: 'arrows', description: 'Get information about arrows' },
    { name: 'axes', description: 'Get information about axes' },
    { name: 'bows', description: 'Get information about bows' },
    { name: 'clubs', description: 'Get information about clubs' },
    { name: 'fists', description: 'Get information about fists' },
    { name: 'food', description: 'Get information about food' },
    { name: 'knifes', description: 'Get information about knifes' },
    { name: 'pickaxes', description: 'Get information about pickaxes' },
    { name: 'polearms', description: 'Get information about polearms' },
    { name: 'shields', description: 'Get information about shields' },
    { name: 'spears', description: 'Get information about spears' },
    { name: 'swords', description: 'Get information about swords' }
  ],
  components: {
    schemas: {
      arrows: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          recipe: {
            type: 'string'
          },
          quantity: {
            type: 'integer',
            format: 'int32',
            example: '20'
          },
          weight: {
            type: 'number',
            format: 'double',
            example: '0.1'
          },
          pierce: {
            type: 'integer',
            format: 'int32',
            example: '0'
          },
          fire: {
            type: 'integer',
            format: 'int32',
            example: '0'
          },
          spirit: {
            type: 'integer',
            format: 'int32',
            example: '0'
          },
          poison: {
            type: 'integer',
            format: 'int32',
            example: '0'
          },
          frost: {
            type: 'integer',
            format: 'int32',
            example: '0'
          },
          stagger: {
            type: 'integer',
            format: 'int32',
            example: '0'
          },
          knockback: {
            type: 'integer',
            format: 'int32',
            example: '0'
          }
        }
      },
      axes: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          quality: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                quality: { type: 'integer', format: 'int32', example: '1' },
                recipe: {
                  type: 'string'
                },
                weight: {
                  type: 'number',
                  format: 'double',
                  example: '0.1'
                },
                durability: {
                  type: 'integer',
                  format: 'int32',
                  example: '100'
                },
                slash: {
                  type: 'integer',
                  format: 'int32',
                  example: '0'
                },
                spirit: {
                  type: 'integer',
                  format: 'int32',
                  example: '0'
                },
                poison: {
                  type: 'integer',
                  format: 'int32',
                  example: '0'
                },
                chop: {
                  type: 'integer',
                  format: 'int32',
                  example: '20'
                },
                backstab: {
                  type: 'string',
                  example: '3x'
                },
                stagger: {
                  type: 'integer',
                  format: 'int32',
                  example: '0'
                },
                knockback: {
                  type: 'integer',
                  format: 'int32',
                  example: '0'
                },
                blockForce: {
                  type: 'integer',
                  format: 'int32',
                  example: '0'
                },
                parryBonus: {
                  type: 'string',
                  example: '2x'
                },
                movement: {
                  type: 'string',
                  example: '-5%'
                }
              }
            }
          }
        }
      },
      bows: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          quality1: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '50'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              poison: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '1.5x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality2: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '50'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              poison: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '1.5x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality3: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '50'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              poison: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '1.5x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality4: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '50'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              poison: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '1.5x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          }
        }
      },
      clubs: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          quality1: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '20'
              },
              blunt: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              fire: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              frost: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality2: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '20'
              },
              blunt: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              fire: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              frost: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality3: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '20'
              },
              blunt: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              fire: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              frost: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality4: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '20'
              },
              blunt: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              fire: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              frost: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          }
        }
      },
      fists: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          quality1: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '300'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '6x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '6x'
              }
            }
          },
          quality2: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '300'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '6x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '6x'
              }
            }
          },
          quality3: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '300'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '6x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '6x'
              }
            }
          },
          quality4: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '300'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '6x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '6x'
              }
            }
          }
        }
      },
      food: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          recipe: {
            type: 'string'
          },
          weight: {
            type: 'integer',
            format: 'double',
            example: '0.1'
          },
          stack: {
            type: 'integer',
            format: 'int32',
            example: '0'
          },
          maxHealth: {
            type: 'integer',
            format: 'int32',
            example: '0'
          },
          maxStamina: {
            type: 'integer',
            format: 'int32',
            example: '0'
          },
          maxEitr: {
            type: 'integer',
            format: 'int32',
            example: '0'
          },
          duration: {
            type: 'string',
            example: '1800s'
          },
          healing: {
            type: 'string',
            example: '5 hp/tick'
          }
        }
      },
      knifes: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          quality1: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '6x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '4x'
              }
            }
          },
          quality2: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '6x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '4x'
              }
            }
          },
          quality3: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '6x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '4x'
              }
            }
          },
          quality4: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '6x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '4x'
              }
            }
          }
        }
      },
      pickaxes: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          quality1: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '0.1'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              mining: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality2: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '0.1'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              mining: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality3: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '0.1'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              mining: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality4: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '0.1'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              mining: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          }
        }
      },
      polearms: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          quality1: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '2.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              lightning: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality2: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '2.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              lightning: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality3: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '2.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              lightning: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality4: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '2.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              lightning: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          }
        }
      },
      shields: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          quality1: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockArmor: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '0x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality2: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockArmor: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '0x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality3: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockArmor: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '0x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality4: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockArmor: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '0x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          }
        }
      },
      spears: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          quality1: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality2: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality3: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality4: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.5'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              pierce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          }
        }
      },
      swords: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          quality1: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.0'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              frost: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality2: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.0'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              frost: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality3: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.0'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              frost: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          },
          quality4: {
            type: 'object',
            properties: {
              recipe: {
                type: 'string'
              },
              weight: {
                type: 'number',
                format: 'double',
                example: '1.0'
              },
              durability: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              slash: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              spirit: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              frost: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              backstab: {
                type: 'string',
                example: '3x'
              },
              stagger: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              knockback: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              blockForce: {
                type: 'integer',
                format: 'int32',
                example: '0'
              },
              parryBonus: {
                type: 'string',
                example: '2x'
              },
              movement: {
                type: 'string',
                example: '-5%'
              }
            }
          }
        }
      }
    }
  }
};

const outputFile = './swagger.json';
const endpointsFiles = [
  './routers/arrows.router.ts',
  './routers/axes.router.ts',
  './routers/bows.router.ts',
  './routers/clubs.router.ts',
  './routers/fists.router.ts',
  './routers/foods.router.ts',
  './routers/knifes.router.ts',
  './routers/pickaxes.router.ts',
  './routers/polearms.router.ts',
  './routers/shields.router.ts',
  './routers/spears.router.ts',
  './routers/swords.router.ts'
];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
