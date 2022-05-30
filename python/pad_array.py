#REMEMBER TO PSEUDOCODE
from secrets import randbelow
from typing import final


def pad(array, min_size, value = None):
    final_List = []
    
    if value == None:
        while len(final_List) != min_size:
                final_List.append(None)
    else:
        while len(final_List) != min_size:
                final_List.append(value) 
    for i in range(0,len(array)):
        if array[i] != final_List[i]:
            final_List[i] = array[i]  

    return final_List      

print(pad([1,2,3,4,5],14,"frog"))
