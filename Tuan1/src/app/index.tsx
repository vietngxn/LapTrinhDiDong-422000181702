import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, Spacing } from '@/constants/theme';
import { Account } from '@/models/Account';
import { AirConditioner } from '@/models/AirConditioner';
import { Bike } from '@/models/Bike';
import { Bird } from '@/models/Bird';
import { Book } from '@/models/Book';
import { Box } from '@/models/Box';
import { Car } from '@/models/Car';
import { CardPayment } from '@/models/CardPayment';
import { CashPayment } from '@/models/CashPayment';
import { Circle } from '@/models/Circle';
import { Developer } from '@/models/Developer';
import { Fan } from '@/models/Fan';
import { Fish } from '@/models/Fish';
import { Library } from '@/models/Library';
import { Logger } from '@/models/Logger';
import { Manager } from '@/models/Manager';
import { MathUtil } from '@/models/MathUtil';
import { Order } from '@/models/Order';
import { Person } from '@/models/Person';
import { Product } from '@/models/Product';
import { Rectangle } from '@/models/Rectangle';
import { Repository } from '@/models/Repository';
import { Robot } from '@/models/Robot';
import { School } from '@/models/School';
import { Shape } from '@/models/Shape';
import { Square } from '@/models/Square';
import { Stack } from '@/models/Stack';
import { Student } from '@/models/Student';
import { Teacher } from '@/models/Teacher';
import { User } from '@/models/User';

export default function HomeScreen() {
  const person = new Person("Viet", 21);
  const student = new Student("Viet", 21, 1);
  const car = new Car("Toyota", "Camry", 2022);
  const rectangle = new Rectangle(10, 20);
  const productList = [new Product("Book", 10), new Product("Laptop", 120), new Product("Phone", 30)];
  const account = new Account("ACC-9876", "Nguyen", 5000);

  const eagle = new Bird("Eagle");
  const shark = new Fish("Shark");

  const square = new Square(8);
  const circle = new Circle(5);

  const manager = new Manager("Alice Manager", 120000, "Product Delivery");
  const dev = new Developer("Bob Developer", 95000, "React Native");

  const library = new Library();
  const sampleBook = new Book("TypeScript Clean Code", "Unknown Author", 2023);
  const sampleUser = new User();
  sampleUser.setter("Viet");
  library.addBook(sampleBook);
  library.addUser(sampleUser);

  const stringBox = new Box<string>("Kiểu chuỗi");
  const numberBox = new Box<number>(99.9);

  const logger = Logger.getInstance();
  logger.log("HomeScreen Rendered Task 10-30");

  const sumVal = MathUtil.add(15, 5);
  const subVal = MathUtil.subtract(15, 5);
  const mulVal = MathUtil.multiply(15, 5);
  const divVal = MathUtil.divide(15, 5);

  const vehicleCar = new Car("Ford", "Mustang", 2023, 180);
  const vehicleBike = new Bike("Trek", 32);

  const productRepo = new Repository<Product>();
  productRepo.add(new Product("Tablet", 350));
  productRepo.add(new Product("Smartwatch", 200));

  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  numberStack.push(30);
  const poppedVal = numberStack.pop();
  const peekVal = numberStack.peek();

  const cashPay = new CashPayment();
  const cardPay = new CardPayment("1111222233334444");

  const myFan = new Fan("Cooler Fan", 3);
  const myAC = new AirConditioner("Panasonic AC", 16);

  const myOrder = new Order();
  myOrder.addProduct(new Product("Keyboard", 80));
  myOrder.addProduct(new Product("Mouse", 45));

  const teacher = new Teacher("Viet", 21, "Software Engineering");

  const myRobot = new Robot("Optimus");
  const movingTesla = new Car("Tesla", "Model Y", 2024, 110);

  const mySchool = new School("Tech University");
  mySchool.addStudent(student);
  mySchool.addTeacher(teacher);

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedText style={styles.header}>23687551 - Nguyễn Bá Việt</ThemedText>

        <ThemedText style={styles.textBody}>
          Câu 1: {person.displayInfo()}{'\n'}
          Câu 2: {student.displayInfo()}{'\n'}
          Câu 3: {car.displayInfo()}{'\n'}
          Câu 4: {rectangle.displayInfo()}{'\n'}
          Câu 8: Những sản phẩm giá trên 100 là: {productList.filter((p) => p.price > 100).map((p) => p.name).join(", ")}{'\n'}
          Câu 10 Account: {account.getInfo()}{'\n\n'}


          Câu 12 (Interfaces Flyable & Swimmable):{'\n'}
          - Bird: {eagle.fly()}{'\n'}
          - Fish: {shark.swim()}{'\n\n'}
          Câu 13 & 25 (Shape static & area):{'\n'}
          - Static describe: {Shape.describe()}{'\n'}
          - Square Area (side=8): {square.area()}{'\n'}
          - Circle Area (radius=5): {circle.area().toFixed(2)}{'\n\n'}
          Câu 14:{'\n'}
          - Manager: {manager.getDetails()} | {manager.manage()}{'\n'}
          - Developer: {dev.getDetails()} | {dev.code()}{'\n\n'}
          Câu 15 (Library class): {library.getInventorySummary()}{'\n\n'}
          Câu 16 (Generic Box):{'\n'}
          - StringBox: {stringBox.getValue()}{'\n'}
          - NumberBox: {numberBox.getValue()}{'\n\n'}

          Câu 18 (Static MathUtil):{'\n'}
          - 15 + 5 = {sumVal}{'\n'}
          - 15 - 5 = {subVal}{'\n'}
          - 15 * 5 = {mulVal}{'\n'}
          - 15 / 5 = {divVal}{'\n\n'}


          Câu 20 (Vehicle interface):{'\n'}
          - Car details: {vehicleCar.getDetails()}{'\n'}
          - Bike details: {vehicleBike.getDetails()}{'\n\n'}
          Câu 21 (Generic Repository):{'\n'}
          - Products in Repository: {productRepo.getAll().map((p) => `${p.name} ($${p.price})`).join(', ')}{'\n\n'}
          Câu 22 (Stack class):{'\n'}
          - Popped value: {poppedVal} (expected: 30){'\n'}
          - Peek value: {peekVal} (expected: 20){'\n'}
          - Is empty? {numberStack.isEmpty() ? 'Yes' : 'No'}{'\n\n'}
          Câu 23 (Payment interface):{'\n'}
          - Cash payment: {cashPay.pay(100)}{'\n'}
          - Card payment: {cardPay.pay(250)}{'\n\n'}
          Câu 24 (Appliance abstract class):{'\n'}
          - Fan: {myFan.turnOn()}{'\n'}
          - AC: {myAC.turnOn()}{'\n\n'}
          Câu 26 (Order class total):{'\n'}
          - Order items: {myOrder.products.map(p => `${p.name} ($${p.price})`).join(', ')}{'\n'}
          - Total price: ${myOrder.calculateTotalPrice()}{'\n\n'}
          Câu 27 (Teacher class): {teacher.introduce()}{'\n\n'}
          Câu 29 (Movable interface):{'\n'}
          - Robot: {myRobot.move()}{'\n'}
          - Tesla Car: {movingTesla.move()}{'\n\n'}
          Câu 30 (School class summary):{'\n'}
          - {mySchool.displayInfo()}
        </ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.three,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: Spacing.two,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#34d399',
    marginTop: Spacing.three,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    paddingBottom: Spacing.one,
  },
  textBody: {
    fontSize: 14,
    color: '#e5e7eb',
    lineHeight: 22,
    fontFamily: 'monospace',
  },
});
