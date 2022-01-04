export default function PlusRoundIcon(props: any) {
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
                d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22zM7 11v2h4v4h2v-4h4v-2h-4V7h-2v4H7z"
                fill={props.pathFill}
            />
        </g>
    </svg>
}