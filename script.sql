# 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select *
from client
where LENGTH(FirstName) < 6;

# 2. +Вибрати львівські відділення банку.+
select *
from department
where DepartmentCity = 'Lviv';

# 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select *
from client
where Education = 'high'
order by LastName;

# 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select *
from application
order by idApplication desc
limit 5;

# 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select *
from client
where LastName like '%OV'
   or LastName like '%OVA';

# 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select *
from client
         join department d on client.Department_idDepartment = d.idDepartment
where d.DepartmentCity = 'Kyiv';

# 7. +Вивести імена клієнтів та паспорти, погрупувавши їх за іменами.
select FirstName, Passport
from client
order by FirstName;

# 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
select *
from client
         join application a on client.idClient = a.Client_idClient
where a.CreditState = 'Not returned'
  and a.Sum > 5000;

# 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select COUNT(client.idClient)
from client
union
select COUNT(client.idClient)
from client
         join department d on client.Department_idDepartment = d.idDepartment
where d.DepartmentCity = 'Lviv';


# 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select MAX(application.Sum), c.FirstName
from application
         join client c on c.idClient = application.Client_idClient
group by application.Client_idClient;

# 11. Визначити кількість заявок на крдеит для кожного клієнта.
select COUNT(application.Client_idClient), c.FirstName
from application
         join client c on c.idClient = application.Client_idClient
group by application.Client_idClient;

# 12. Визначити найбільший та найменший кредити.
select MAX(Sum)
from application
union
select MIN(Sum)
from application;

# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select COUNT(application.idApplication) as creditCount, c.FirstName
from application
         join client c on application.Client_idClient = c.idClient
where c.Education = 'high'
group by application.Client_idClient;

# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select AVG(a.Sum) as avgSum, FirstName
from client
         join application a on client.idClient = a.Client_idClient
group by idClient
order by avgSum desc
limit 1;

# 15. Вивести відділення, яке видало в кредити найбільше грошей
select idDepartment, DepartmentCity, SUM(a.Sum) cSum
from department
         join client c on department.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
group by idDepartment
order by cSum desc
limit 1;

# 16. Вивести відділення, яке видало найбільший кредит.
select idDepartment, DepartmentCity, MAX(a.Sum) maxSum
from department
         join client c on department.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
group by idDepartment
order by maxSum desc
limit 1;

# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update application
    join client c on c.idClient = application.Client_idClient
set Sum = 6000
where c.Education = 'high';

# 18. Усіх клієнтів київських відділень пересилити до Києва.
update client
    join department d on d.idDepartment = client.Department_idDepartment
set City = 'Kyiv'
where DepartmentCity = 'Kyiv';

# 19. Видалити усі кредити, які є повернені.
delete
from application
where CreditState = 'Returned';

# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete application from application
    left join client c on c.idClient = application.Client_idClient
where LastName like '_a%'
  and LastName like '_e%'
  and LastName like '_i%'
  and LastName like '_o%'
  and LastName like '_y%'
  and LastName like '_u%';

# 21 Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select idDepartment, DepartmentCity, sum(Sum) cSum from department
    join client c on department.idDepartment = c.Department_idDepartment
    join application a on c.idClient = a.Client_idClient
where DepartmentCity = 'Lviv'
group by idDepartment
having cSum > 5000;

# 22 Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select idClient, FirstName, LastName from client
    join application a on client.idClient = a.Client_idClient
where CreditState = 'Returned' and Sum > 5000
group by idClient;

# 23 /* Знайти максимальний неповернений кредит.*/
select idApplication, Sum, Currency, CreditState from application where CreditState = 'Not returned' order by Sum desc limit 1;

# 24 /*Знайти клієнта, сума кредиту якого найменша*/
select idClient, FirstName, LastName, City, Sum from client
    join application a on client.idClient = a.Client_idClient
order by Sum
limit 1;

# 25 /*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/
select idApplication, Sum from application where Sum > (select AVG(Sum) from application);

# 26 /*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/
SELECT * from client where City = (select City from client join application a on client.idClient = a.Client_idClient
group by Client_idClient
order by COUNT(Client_idClient) desc limit 1);

# 27 #місто чувака який набрав найбільше кредитів
select City, FirstName from client join application a on client.idClient = a.Client_idClient
group by Client_idClient
order by COUNT(Client_idClient) desc limit 1;
