# C++

## Input and output
```
std::cin >> x >> y;                     input into variables x and y

std::cout << "text" << str << '\n';     output of text and variable str

std::endl                               same as '\n'
```

## Classes

### module.hpp

```
#include whatever

class c_name {          class name
private:
    type name;          member variable (attributes), private
public:
    c_name();           constructor declaration
    ~c_name() {}        constructor declaration with blank definition
    void fn();          function declaration
};
```
### module.cpp:

```
#include "module.hpp"

c_name::c_name() { code }       constructor definition (implementation)
void c_name::fn() { code }      function definition (implementation)
```


## Constructors and destructors

```
ClassName::ClassName(int x) {               assigning values when creating an object
    m_x = x;
}

ClassName::ClassName(int x) : m_x(x) {}     faster version of variable initiation (class member initializer list)

ClassName::ClassName() = delete;            when we don't want a constructor

ClassName::~Classname() { }                 destructor

explicit ClassName::ClassName()             can't use implicit conversionn (ClassName x = 6;)
```


## Inheritance, virtual functions and interfaces

```
Class A {
    public: int x;
    protected: int y;
    private: int z;
}
Class B : public A { }      A inherits B, x is public, y is protected, z is not accesible
Class C : protected A { }   both x and y is protected, z is not accesible
Class D : private A { }     both x and y are private, z is not accesible

class x {
    virtual void fn();      virtual function, can be overriden when referencing from base class (polymorphysm)         
}
class y : public x {
    void fn();              overrides virtual function
}

x *ptr;
y obj;
x = &y;
x->fn();                    fn() from y overrides fn() from x

class x {
    virtual void fn();      only virtual functions = interface
}
```


## Constants, pointers and references

```
const int                       constant integer

const int*                      pointer to constant integer
int const*                      same
int* const                      constant pointer to integer
const int* const                constant pointer to constant integer

int&                            reference to an integer (similar to int*)
const int&                      constant, not-modifiable reference (used when passing arguments)
                                function(const class_name& object);
int const&                      same
int& const                      same (but might give an error)

const int get()                 function that returns constant integer

int* get()                      returns pointer to integer
const int* get()                returns pointer to constant integer
int const* get()                same
int* const get()                returns constant pointer to integer
const int* const get()          returns constant pointer to constant integer

int get() const                 const member function, won't modify class variables

int& get()                      returns reference to integer
int const& get()                returns reference to constant integer
const int& get()                same             
```


## New object

```
class x = class(args);          stack
class x(args);                  stack
class x = value;                stack, implicit conversion (1 parameter)

class* x = new class(args);     heap
delete name;                    we have to deallocate the memory

x->method / (*x).method         using functions of objects in the heap

int* x = new int[50]            array of 50 integer on the heap
delete x;
```


## Operator overloading

```
- +, -, /, *, =, &, ->, >>, new, delete, " ", ., ...

class x {
private: int val;
public:
    bool operator==(x obj) {            overloading of operator ==
        return val == obj.val;
    }
    std::ostream& operator<<(string& str, x obj) {
        str << obj.val << '\n';         overloading of <<
    }
}
```


## Templates

```
template <class T> T max(Ta, Tb) {
	return a > b ? a : b;
}
```
