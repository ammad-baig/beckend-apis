import { Button } from "@mui/material";


export default function ABButton(props) {
    const { label, onClick, className } = props
    return (
        <div>
            <Button className={className} onClick={onClick} variant="contained">{label}</Button>
        </div>
    )
}
