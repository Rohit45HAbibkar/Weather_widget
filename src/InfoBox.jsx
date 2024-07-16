import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FlareIcon from '@mui/icons-material/Flare';

export default function InfoBox({info}) {
    let rainurl="https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?s=612x612&w=is&k=20&c=6Yhs6gUg6497hiDxqploBRuA19qJtuSLa1mGBqX1FRg=";

    let hoturl="https://media.istockphoto.com/id/1150229690/photo/silhouette-man-is-drinking-water-bottle-on-hot-weather-background-with-summer-season-high.webp?b=1&s=170667a&w=0&k=20&c=ezFZUW2QQgWfvbbYU0E4ZQU-uziz1MJb7jVi4a7ceC8=";

    let coldurl="https://media.istockphoto.com/id/477839825/photo/cold-weather-ahead-road-warning-sign.jpg?s=612x612&w=is&k=20&c=d8PtHntftbcuPmprmN13-GqxmhXCE0TryWZtqRfsdXQ=";

    let dusturl="https://media.istockphoto.com/id/1052047454/photo/sandstorm.webp?b=1&s=170667a&w=0&k=20&c=VA2ByaYSfa1wqzAaPeviTU-ZpGlKwJrYcvgtbpqjFUg="





    
  return (
    <div className="InfoBox">
      <div className="Card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity>80
            ?rainurl
            :info.temp>15
            ?hoturl
            :coldurl
          }
          
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className='bold'>{info.city}{
            info.humidity>80
            ?<ThunderstormIcon/>
            :info.temp>15
            ?<FlareIcon/>
            :< AcUnitIcon/>
          }</div>
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"} >
            <p><b>Temperature</b>={info.temp}&deg;C</p>
            <p><b>Humidity</b>={info.humidity}</p>
            <p><b>Min Temp</b>={info.tempMin}&deg;C</p>
            <p><b>Max Temp</b>={info.tempMax}&deg;C</p>
            <p><b>The Weather can be described as <i> {info.weather}</i> and feels like {info.feelsLike}&deg;C</b></p>
            
            
          </Typography>
        </CardContent>
       
      </Card>
      </div>
    </div>
  );
}
