<?php
/**
 * Created by PhpStorm.
 * User: Onatouvus
 * Date: 21/01/2019
 * Time: 20:37
 */


function api()
{
    $ch = curl_init();
    $ville = (isset($_GET['ville']) ? $_GET['ville'] : null);
    curl_setopt($ch, CURLOPT_URL, "http://api.openweathermap.org/data/2.5/weather?q=" . $ville . "&units=metric&&APPID=55d16c4ba159de67186b5be5e9368467");
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_exec($ch);

    json_encode($ch);

    curl_close($ch);

}

api();