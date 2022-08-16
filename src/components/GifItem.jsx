import PropTypes from 'prop-types';

export const GifItem = ({title, url, id}) => {
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

//npm install --save prop-types
/*Las siguientes propTypes hacen que el campo title y url sean obligatorios
*/
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}