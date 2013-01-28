<?php
// http://ks304579.kimsufi.com/myaxagenda/
// $context = stream_context_create(array('http' => array('header' => 'Host: ks304579.kimsufi.com')));
$events = file_get_contents('http://localhost:6789/fakeData/listEvent.json');
// $data = json_decode($events);
file_put_contents('/tmp/event.log', $events);
echo $events;
?>


