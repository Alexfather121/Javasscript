//������� ����������� ���������� �������,
//���������� ����������:
function caller(func){
    return func
}
//������� ���������� �������� ����������� �� ���������:
function show(txt){
    document.write(txt+"<br>")
}
//������ �� ��������� text, ������� hi()
//� ���������������� ������� toString():
let obj = {text:"������ obj",hi:function(){
    document.write(this.text+"<br>")
},
toString:function(){
    return this.text
}
}
//����� ������� show() ����� ������� caller()
caller(show)("������� show()")
obj.hi()//����� ������ �������
//��������� ������� �������
//����� hi() ����� ������� caller():
caller(obj.hi)()
//����� ������ hi() ����� ������� caller()
caller(obj.hi.bind(obj))()
//����������� ����� ������� �� ������ ������:
let powerOfTwo = Math.pow.bind(Math,2)
let n = 5
document.write("2<sup>"+n+"</sup>= "+powerOfTwo(n)+"<br>")
//��������������� ������� � �������� ������ this � ����:
function f(x){
    return this + x
}
//����������� ����� ������� �� ������
//��������������� �������:
let one = f.bind(10)
let two = f.bind(obj)
//����� �������:
document.write(one(5)+"<br>")
document.write(two(" - ��� ��")+"<br>")
//����� �������� �������� text ������� obj:
obj.text = "��� �� ������"
//����� �������:
document.write(two(" -����� ��������")+"<br>")