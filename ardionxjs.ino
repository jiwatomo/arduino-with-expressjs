#include <Adafruit_LiquidCrystal.h>
const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
Adafruit_LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
String recive = "Ready"; 
String prevRecive;

void setup() {
    lcd.begin(16, 2);
    Serial.begin(9600);
}
void loop() {
    if(Serial.available() > 0) {
        recive = Serial.readString();
    }
    if(recive != prevRecive) {
        lcd.clear();
        lcd.println(recive);
        prevRecive = recive;
    }
}