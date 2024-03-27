type Draggable = {
    drag: () => void
}

type Resizable = {
    reSize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag:() => {},
    reSize:() => {},
}