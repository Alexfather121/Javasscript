//��������������� � ��������� ������ toString():
Array.prototype.toString = function(){
    let txt = "<"+this.join(";")+">"
    return txt
}
//��������������� � ��������� ������ valueOf():
Array.prototype.valueOf = function(){
    return eval(this.join("+"))/this.length
}
//������:
let A = [1,[2,3],4,"�����",true]
document.write("������:<br>")
//����������� �������(���������� ����� toString()):
document.write(A)
//������:
let B = [3, 5, 1, 8, 2]
//����������� ������� (���������� ����� toString()):
document.write(["<br> B = ",B].join(" +"))
//�������� ����� valueOf():
document.write("<br>������� ��������:"+B+"<br>")
//����� ����� ������� toString() � valueOf():
document.write("������ "+[1,2,3,4].toString()+"������� "+[1,2,3,4].valueOf())