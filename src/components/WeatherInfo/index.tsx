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
    const cityInfo = [
        'Минск',
        'Беларусь',
        '+2',
        '+5',
        '-4',
        '3,8',
        'Облачно',
        '9:20',
        '17:40',
    ];
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
                                {props.info.city !== ''
                                    ? props.info.city
                                    : cityInfo[0]}
                                ,&nbsp;
                            </p>
                            <p>
                                {props.info.city !== ''
                                    ? props.info.country
                                    : cityInfo[1]}
                            </p>
                        </div>
                        <p className="currentTemp">
                            {props.info.city !== ''
                                ? props.info.temp
                                : cityInfo[2]}
                        </p>
                        <p className="currentInfo">Текущая температура</p>
                        <div className="minMax">
                            <div>
                                <p>
                                    {props.info.city !== ''
                                        ? props.info.temp_max
                                        : cityInfo[3]}
                                </p>
                                <p>Максимум</p>
                            </div>
                            <div>
                                <p>
                                    {props.info.city !== ''
                                        ? props.info.temp_min
                                        : cityInfo[4]}
                                </p>
                                <p>Минимум</p>
                            </div>
                        </div>
                        <p className="description">
                            {props.info.city !== ''
                                ? props.info.weather
                                : cityInfo[6]}
                        </p>
                        <div className="sunWind">
                            <div>
                                <p>
                                    {props.info.city !== ''
                                        ? props.info.sunrise
                                        : cityInfo[7]}
                                </p>
                                <p>Время заката</p>
                            </div>
                            <div>
                                <p>
                                    {props.info.city !== ''
                                        ? props.info.speed
                                        : cityInfo[5]}
                                    &nbsp;м/с
                                </p>
                                <p>Скорость ветра</p>
                            </div>
                            <div>
                                <p>
                                    {props.info.city !== ''
                                        ? props.info.sunset
                                        : cityInfo[8]}
                                </p>
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
