import { jsx as _jsx } from "react/jsx-runtime";
import './mylabel.css';
export const MyLabel = ({ allCaps = false, color = 'primary', fontColor, label = 'No Label', size = 'normal', }) => {
    return (_jsx("span", { className: `label ${size} text-${color} `, style: {
            color: fontColor
        }, children: (allCaps) ? label.toUpperCase() : label }));
};
