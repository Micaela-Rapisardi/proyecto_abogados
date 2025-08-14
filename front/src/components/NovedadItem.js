export default async function NovedadItem(props) {

    const{titulo, subtitulo, cuerpo}=props;

    return (
        <div className="novedades">
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <div dangerouslySetInnerHTML={{__html: cuerpo}}/>
            <hr />
        </div>
    );
}