const newCommandStartChar = ':'
const newCommandEndChar = ';'

const createOperate = (callback: (num1: number, num2: number) => number) => {
  return (arr: [number], index: number) => {
    arr[index] = callback(arr[index - 2], arr[index - 1])
    arr.splice(index - 2, 2)
    return index - 2
  }
}

const stackOperations = {
  '+': createOperate((a, b) => a + b),
  '-': createOperate((a, b) => a - b),
  '*': createOperate((a, b) => a * b),
  '/': createOperate((a, b) => a / b),
  drop: (arr: [number, string], index: number) => {
    arr.splice(index - 1, 2)
    return index - 2
  },
  dup: (arr: [number, string], index: number) => {
    arr[index] = arr[index - 1]
    return index
  },
  swap: (arr: [number, string], index: number) => {
    const temp = arr[index - 2]
    arr[index - 2] = arr[index - 1]
    arr[index - 1] = temp
    arr.splice(index, 1)
    return index - 1
  },
  over: (arr: [number, string], index: number) => {
    arr[index] = arr[index - 2]
    return index
  },
}

type Stack = number[] | [number, string]

export class Forth {
  stack: Stack
  userCommands: Record<string, string[]>

  constructor() {
    this.stack = []
    this.userCommands = {}
  }

  public evaluate(toEvaluate: string): void {
    const minuscule = toEvaluate.toLocaleLowerCase()
    const isDigitsOnly = !isNaN(Number(minuscule))
    const toEvaluateArray = minuscule.split(' ').map((e) => (Number(e) ? Number(e) : e))

    const isDefiningNewCommand = toEvaluateArray[0] === newCommandStartChar
    if (isDefiningNewCommand) {
      this.defineNewCommand(toEvaluateArray as string[])
      return
    }

    this.stack = toEvaluateArray as number[]

    if (isDigitsOnly) {
      return
    }

    this.resolveStack()
  }

  private defineNewCommand(scriptArray: string[]): void {
    const newCommand = scriptArray[1]
    const endIndex = scriptArray.findIndex((e) => e === newCommandEndChar)
    const commandBody = scriptArray.slice(2, endIndex)

    const resolveUserDefinedCommands = (body: string[]) => {
      const values = body.map((value) => {
        const isLeaf = !!stackOperations[value] || typeof value === 'number'
        if (isLeaf) {
          return value
        }

        return resolveUserDefinedCommands(this.userCommands[value])
      })

      return values.flat()
    }

    this.userCommands[newCommand] = resolveUserDefinedCommands(commandBody)
  }

  private resolveStack() {
    for (let i = 0; i <= this.stack.length; i++) {
      const userCommand = this.userCommands[this.stack[i]]

      if (userCommand) {
        this.stack.splice(i, 1, ...userCommand)
      }

      const element = this.stack[i]
      const isString = typeof element === 'string'

      if (!isString) {
        continue
      }

      i = stackOperations[this.stack[i]](this.stack, i)
    }
  }
}
