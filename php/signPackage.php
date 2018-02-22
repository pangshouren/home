<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx285e374533e75a81", "4bfb43c944457f0e7d8494f006101bae");
$signPackage = $jssdk->GetSignPackage();
echo "var signPackage=".json_encode($signPackage);
?>