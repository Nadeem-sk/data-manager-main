export default function MinusRoundIcon(props: any) {
    return <svg
        className={props.cclass}
        aria-hidden="true"
        role="img"
        width="18"
        height="18"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
    >
        <g fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zM8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"
                fill={props.pathFill}
            />
        </g>
    </svg>
}