# # school = [
# #     [99,11,22,3],
# #     [100,100,100,100],
# #     [15,1,100,88,43,22,55]
# # ]
# #
# # def cal_avg(args):
# #     avg=0
# #     for cl in args:
# #         sum=0
# #         for grade in cl:
# #             sum+=grade
# #         avg += (sum/len(cl))/len(args)
# #     return avg
# #
# #
# # print(cal_avg(school))
#
# def power_of(x,p):
#     if p==1:
#         return x
#     return power_of(x,p-1)*x
#
# print(power_of(2,5))
#
#
#
#

def sum_digits(number):
    return number if number < 10 else number%10+sum_digits(number//10)

print(sum_digits(987654105321))




