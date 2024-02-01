<?php

$dir = "images/ads/active/";
$callback = "missing";
if (!empty($_GET['callback']))
    $callback = $_GET['callback'];
$data = array();
if (is_dir($dir)){
    if ($dh = opendir($dir)){
        while (($file = readdir($dh)) !== false){
            if (strpos($file, '.jpg') !== false)
                array_push($data, $dir . $file);
        }
        closedir($dh);
    }
}
header('Content-type: application/json');
echo $callback . '(' . json_encode($data) . ')';
?>