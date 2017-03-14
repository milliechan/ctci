# your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available. 

# to do this you need to know when any team is having a meeting. in HiCal, a meeting is stored as arrays of integers [start)time, end_time]. These integers represent the number of 30-minute blocks past 9:00am. 

# ex: 
# [2, 3] #mtg from 10:00 - 10:30 am 
# [6, 9] # mtg from 12:00 - 1:30 pm

# write a function merge_ranges() that takes an array of mtg time ranges and returns an array of condensed ranges 

#ex:   [ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ]
#fn returns:   [ [0, 1], [3, 8], [9, 12] ]

# if start or end time is within range of any of the other arrays, merge them ? and remove dupes 

def merge_ranges(meetings)
  # sort by start times 
  sorted_meetings = meetings.sort 

  #initialize merged_meetings w/earliest meeting 
  merged_meetings = [sorted_meetings[0]]

  sorted_meetings[1..-1].each do |current_meeting_start, current_meeting_end|
    last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]

    # if current and last mtgs overlap, use latest end time
    if current_meeting_start <=last_merged_meeting_end 
      merged_meetings[-1] = [last_merged_meeting_start, [last_merged_meeting_end, current_meeting_end].max]
      # add current mtg since it doesn't overlap
    else
      merged_meetings.push([current_meeting_start, current_meeting_end])
    end
  end
  merged_meetings
end


