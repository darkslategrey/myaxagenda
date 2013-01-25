<?php
$events = file_get_contents('http://localhost:6789/fakeData/listEvent.json');
file_put_contents('/tmp/event.log', $events);
echo $events;
?>


