export default function PlusIcon(props: any) {
    return <svg
        className={props.cclass}
        aria-hidden="true"
        role="img"
        width="18"
        height="18"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
    >
        <path d="M17 9v2h-6v6H9v-6H3V9h6V3h2v6h6z" fill={props.pathFill} />
    </svg>
}