import "./testimonials.scss"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Testimonials(){
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <ArrowBackIcon className="left" />
                        <img className="user" src="https://i2.wp.com/www.hindishayaricollections.com/wp-content/uploads/2019/09/beautiful-girls-images-wallpapers-31.jpeg?resize=480%2C700&ssl=1" alt="" />
                        <img className="right" src="./assets/youtube-icon.jpeg" alt="" />
                    </div>
                    <div className="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ullam veniam, sit vitae quidem omnis adipisci ex! Deserunt, incidunt.</div>
                    <div className="bottom">
                        <h3>Jean Gray</h3>
                        <h4>CEO</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}