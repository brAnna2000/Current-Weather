import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import './style.scss';

interface InfoProps {
    info: {
        city: string;
        country: string;
        speed: number;
        temp: number;
        temp_min: number;
        temp_max: number;
        sunset: string;
        sunrise: string;
        weather: string;
    };
}

function WeatherInfo(props: InfoProps): JSX.Element {
    // const cityInfo = [
    //     'Минск',
    //     'Беларусь',
    //     '+2',
    //     '+5',
    //     '-4',
    //     '3,8',
    //     'Облачно',
    //     '9:20',
    //     '17:40',
    // ];
    return (
        <Box
            sx={{ width: '100%', maxWidth: 406, bgcolor: 'background.paper' }}
            className="info"
        >
            <Divider />
            <nav aria-label="main mailbox folders">
                <List>
                    <div>
                        <div className="city">
                            <p>
                                {props.info.city}
                                ,&nbsp;
                            </p>
                            <p>{props.info.country}</p>
                        </div>
                        <p className="currentTemp">{props.info.temp}</p>
                        <p className="currentInfo">Текущая температура</p>
                        <div className="minMax">
                            <div>
                                <p>{props.info.temp_max}</p>
                                <p>Максимум</p>
                            </div>
                            <div>
                                <p>{props.info.temp_min}</p>
                                <p>Минимум</p>
                            </div>
                        </div>
                        <p className="description">{props.info.weather}</p>
                        <div className="sunWind">
                            <div>
                                <p>{props.info.sunrise}</p>
                                <p>Время заката</p>
                            </div>
                            <div>
                                <p>
                                    {props.info.speed}
                                    &nbsp;м/с
                                </p>
                                <p>Скорость ветра</p>
                            </div>
                            <div>
                                <p>{props.info.sunset}</p>
                                <p>Время рассвета</p>
                            </div>
                        </div>
                    </div>
                </List>
            </nav>
            <Divider />
        </Box>
    );
}

export default WeatherInfo;
