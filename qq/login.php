<?php
/**
 * Created by JetBrains PhpStorm.
 * User: black
 * Date: 14-4-13
 * Time: 下午6:36
 * To change this template use File | Settings | File Templates.
 */
define('IN_ECS', true);

require( '../includes/init.php');
ecs_header("Location: /user.php?act=oath&type=qq\n");
