class Solution {
public:
    int search(vector<int>& nums, int target) {
        int head=0;
     int max=nums.size()-1;
     while(head<=max)
     {
         int mid=(max-head)/2+head;
         int num=nums[mid];
         if(num==target)
         return mid;
         else if(nums[mid]>target)
         max=mid-1;
         else
         head=mid+1;
     }
     return -1;
    }
};