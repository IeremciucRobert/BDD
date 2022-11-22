const RobotDirections = {
  west: 'west',
  north: 'north',
  east: 'east',
  south: 'south',
}
const directions = Object.values(RobotDirections)

const Rotations = {
  right: 'R',
  left: 'L',
} as const
const RotationCommands = Object.values(Rotations)

type RobotRotations = typeof Rotations[RotationsKeys]
type RobotDirections = typeof directions[number]
type RotationsKeys = keyof typeof Rotations

const Movements = {
  advance: 'A',
} as const
const MovementCommands = Object.values(Movements)

type MovementsKeys = keyof typeof Movements
type RobotMovements = typeof Movements[MovementsKeys]

interface RobotPosition {
  x: number
  y: number
}

interface RobotInfo extends RobotPosition {
  direction: RobotDirections
}

export class Robot {
  position: RobotPosition
  direction: RobotDirections

  constructor(initialInfo: RobotInfo) {
    this.position = { x: initialInfo.x, y: initialInfo.y }
    this.direction = initialInfo.direction
  }

  public execute(commandsStr: string): void {
    const commands = commandsStr.toLocaleUpperCase().split('')

    commands.forEach((command) => {
      if (RotationCommands.includes(command as RobotRotations)) {
        this.rotate(command as RobotRotations)
        return
      }
      if (MovementCommands.includes(command as RobotMovements)) {
        this.move(Movements.advance)
        return
      }

      throw new Error('Unknown command')
    })
  }

  get Position(): RobotPosition {
    return this.position
  }

  get Direction(): RobotDirections {
    return this.direction
  }

  private rotate(rotation: RobotRotations): void {
    const directionIndex = directions.findIndex((e) => this.direction === e)

    const rotations = {
      [Rotations.right]: () => {
        if (directionIndex === directions.length - 1) {
          this.direction = directions[0]
          return
        }

        this.direction = directions[directionIndex + 1]
      },
      [Rotations.left]: () => {
        if (directionIndex === 0) {
          this.direction = directions[directions.length - 1]
          return
        }

        this.direction = directions[directionIndex - 1]
      },
    }

    rotations[rotation]()
  }

  private move(movement: RobotMovements): void {
    if (movement === Movements.advance) {
      const advancings = {
        [RobotDirections.west]: () => {
          if (this.position.x === 0) {
            throw new Error('Robot reached left edge limitation')
          }
          this.position.x += -1
        },
        [RobotDirections.north]: () => (this.position.y += 1),
        [RobotDirections.east]: () => (this.position.x += 1),
        [RobotDirections.south]: () => {
          if (this.position.y === 0) {
            throw new Error('Robot reached bottom edge limitation')
          }
          this.position.y += -1
        },
      }

      advancings[this.direction]()
    }
  }
}
