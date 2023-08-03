import './mylabel.css'

export interface MyLabelProps {
    /**
     * Is this the principal label on the page?
     */
    label: string;
    /**
     * How large should the label be?
     */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * Do you want all capital letter?
     */
    allCaps?: boolean;
    /**
     * basic color of the label
     */
    color?: 'primary'|'secondary'|'tertiary',
    /**
     * customize the color of the label
     */
    fontColor?: string;
}

export const MyLabel = ( { 
    allCaps = false,
    color = 'primary',
    fontColor,
    label = 'No Label', 
    size = 'normal',
}: MyLabelProps ) => {
  return (
    <span 
        className={ `label ${ size } text-${ color } ` }
        style={{
            color: fontColor
        }}>
        {  (allCaps) ?  label.toUpperCase() : label }
    </span>
  )
}
