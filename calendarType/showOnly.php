<?php
    $url = 'http://localhost:6789/showOnly.json';
    // The submitted form data, encoded as query-string-style
    // name-value pairs

$body = '';
foreach($_POST as $key => $value) { $body .= $key . '=' . $value . '&'; }
$c = curl_init($url);
curl_setopt($c, CURLOPT_POST, true);
curl_setopt($c, CURLOPT_POSTFIELDS, $body);
curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
$events = curl_exec($c);
file_put_contents('/tmp/event.log', $events);
echo $events;
curl_close($c);
?>
