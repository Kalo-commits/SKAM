#include <stdio.h>
#include <errno.h>
#include <string.h>

#include <wiringPi.h>
#include <softServo.h>

int main ()
{
  if (wiringPiSetup () == -1)
  {
    fprintf (stdout, "oops: %s\n", strerror (errno)) ;
    return 1 ;
  }

  softServoSetup (0, 1, 2, 3, 4, 5, 6, 7) ;
	int x=0,y=0;
	printf("how many times to turn servo: ");
	scanf("%d", &x);
	for(int i=0; i<x; i++)
{		
		printf("enter number: ");
		scanf("%d", &y);
		softServoWrite(7, y);
		delay(100);
}
 //loop for infinity and beyond
 /* for (;;)
    delay (100);*/
}
