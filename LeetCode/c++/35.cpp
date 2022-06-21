class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
     int low=0,high=nums.size()-1;
     int seat=nums.size();
     while(low<=high)
     {
          int mid= (high-low)/2+low;
         if(nums[mid]<target){
            low=mid+1;
         }
         else{
           high=mid-1;
           seat=mid;
         }
        
     }
     return seat;
    }
};