export default function StyleWrapper(props) {
    return <div style={{
        color: props.color,
        fontSize: `${props.size}rem`
    }}>
        {props.children}
    </div>
}