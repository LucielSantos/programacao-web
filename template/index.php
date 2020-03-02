<?php
   require_once('header.php');

   if (!isset($_GET['m'])) {
      require_once('homePage.php');
   }else{
      switch ($_REQUEST['m']) {
         case 'h':
            require_once('homePage.php');
            break;
            
         case 's':
            require_once('aboutPage.php');
            break;

         case 'p':
            require_once('productsPage.php');
            break;

         case 'f':
            require_once('formPage.php');
            break;
         
         default:
            require_once('homePage.php');
         break;
      }
   }

   require_once('footer.php');
?>

