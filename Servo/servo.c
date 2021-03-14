#include <stdio.h>
#include <errno.h>
#include <string.h>
#include <wiringPi.h>
#include <softServo.h>

int main () {
  double mapRange(int a1,int a2,int b1,int b2,int s)
	{
	 return b1 + (s-a1)*(b2-b1)/(a2-a1);
	}
  if (wiringPiSetup () == -1) {
	 fprintf (stdout, "oops: %s\n", strerror (errno)) ;
	 return 1 ;
  }
  softServoSetup (0, 1, 2, 3, 4, 5, 6, 7) ;
 
  softServoWrite(7, mapRange(0,130,-160,1160, 0));
 delay(2000);
 /*int x=0,y=0; 
  printf("How many times to turn servo: "); 
  scanf("%d", &x); 
  for(int i=0; i<x; i++) { 
    printf("Enter number between 0 and 130: ");
    scanf("%d", &y);
    softServoWrite(7, mapRange(0, 130, -160, 1160, y));
    delay(100);
}*/
  softServoWrite(7, mapRange(0, 130, -160, 1160, 90));
  delay(2000);
  softServoWrite(7, mapRange(0, 130, -160, 1160, 0));
 //loop for infinity and beyond
/*  for (;;) delay (100);*/
}	
