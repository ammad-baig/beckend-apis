import './WriteInput.css';


export default function WriteInput(props) {
    const { type, label, onChange, disabled, onClick, value, name } = props;

    return (
        <>

            <input name={name} type={type} placeholder={label} disabled={disabled} onChange={onChange} onClick={onClick} value={value} />
        </>
    );
}